extends KinematicBody2D

var Pipe = preload("res://Objects/Pipe.tscn")

# Constants

const JUMP_FORCE = -400.0
const GRAVITY = 1600.0
const MAX_FALLING_SPEED = 400.0

# Physics

onready var start_position = self.position

var motion = Vector2()

var last_collider = null

# Flow

var dead = false

signal game_over
signal point

func _process(delta):
	var rotation = motion.y / 400.0 * 30.0
	
	if get_parent().playing:
		position.x = start_position.x
		
		motion.y = min(motion.y + GRAVITY * delta, MAX_FALLING_SPEED)
		
		if $PipeDetector.is_colliding():
			var collider = $PipeDetector.get_collider()
			
			if collider != last_collider and collider.filename == Pipe.get_path():
				emit_signal("point")
				
				$Sounds/Point.play()
				
				last_collider = collider

		var collision = move_and_collide(motion * delta)
		
		if collision:
			emit_signal("game_over")
			
			$AnimatedSprite.stop()
			$AnimatedSprite.frame = 0
			
			$Sounds/Hit.play()
			
			dead = true
	elif not dead:
		position.y = start_position.y + sin(OS.get_ticks_msec() / 150.0) * 5.0
	
	$AnimatedSprite.rotation_degrees = rotation
	$CollisionShape2D.rotation_degrees = rotation

func _input(event : InputEvent):
	if event is InputEventMouseButton:
		if event.pressed:
			if get_parent().playing and not dead:
				jump()

# Methods

func jump():
	motion.y = JUMP_FORCE
	
	$Sounds/Jump.play()
