extends Node2D

var Pipe = preload("res://Objects/Pipe.tscn")

const BASE_URL = "http://54.204.252.107:81"
const SAVE_FILE_LOCATION = "user://save.dat"

const PIPES_SPEED = 100.0

var playing : bool = false

var score = 0
var record = 0

func _ready():
	load_save()
	
	randomize()

func _process(delta):
	$GUI/Record.visible = not playing and not $Bird.dead
	$GUI/Score.visible = playing or $Bird.dead
	$GUI/GameOver.visible = $Bird.dead
	
	$GUI/Record.text = "MAX: " + String(record)
	$GUI/Score.text = String(score)
	
	$GUI/LeaderboardButton.disabled = playing or $Bird.dead
	$GUI/LeaderboardButton.visible = not (playing or $Bird.dead)
	
	$GUI/PlayArea.visible = not(playing or $Bird.dead or $Leaderboard.visible)
	
	if playing:
		for pipe in $Pipes.get_children():
			if pipe.position.x < -100:
				pipe.queue_free()
				continue
			
			pipe.position.x -= PIPES_SPEED * delta

func _on_PlayArea_pressed():
	score = 0
	
	playing = true
	
	$Bird.jump()
	$Bird.last_collider = null
	
	$Bird.get_node("AnimatedSprite").play("default")
	
	$PipeSpawn.one_shot = false
	$PipeSpawn.start(1.5)

func _on_PipeSpawn_timeout():
	var pipe = Pipe.instance()
	
	pipe.position.x = get_viewport_rect().size.x + 100
	pipe.position.y = rand_range(100, 300)
	
	$Pipes.add_child(pipe)

func _on_Bird_point():
	score += 1

func _on_Bird_game_over():
	playing = false
	
	$Flash.flash()
	$PipeSpawn.stop()
	
	save_game()
	
	$GUI/GameOver/AnimationPlayer.play("game_over")
	
	record = max(score, record)

func save_game():
	var file = File.new()
	
	file.open(SAVE_FILE_LOCATION, File.WRITE)
	
	var save_data = {
		"record": max(score, record)
	}
	
	file.store_line(to_json(save_data))
	
	file.close()

func load_save():
	var file = File.new()
	
	if file.file_exists(SAVE_FILE_LOCATION):
		file.open(SAVE_FILE_LOCATION, File.READ)
		
		var save_data = parse_json(file.get_line())
		
		if save_data.record:
			self.record = save_data.record
		
		file.close()

func _on_LeaderboardButton_pressed():
	$Leaderboard.visible = true
	$Leaderboard.get_scores()

func _on_TryAgain_pressed():
	if not $Flash.visible:
		$Bird.dead = false
		$Bird.motion.y = 0
		
		for pipe in $Pipes.get_children():
			pipe.queue_free()

func _on_Share_pressed():
	_on_TryAgain_pressed()
	
	if not $Flash.visible:
		$Leaderboard.share()
