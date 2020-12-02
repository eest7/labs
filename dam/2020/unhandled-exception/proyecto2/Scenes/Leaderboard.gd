extends Node2D

onready var base_url = get_parent().BASE_URL

var sharing = false

var method = null

func _ready():
	visible = false
	
	get_scores()

func _process(_delta):
	$Rank.visible = not sharing
	$Share.visible = sharing

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	if method == HTTPClient.METHOD_GET:
		var res = parse_json(body.get_string_from_utf8())
		
		# print(res)
		
		$Rank/Scores.text = ""
		$Rank/Players.text = ""
		
		for score in res.scoreList:
			if score.has("score") and score.has("userName"):
				$Rank/Scores.text += String(score.score) + "\n"
				$Rank/Players.text += String(score.userName) + "\n"

func _on_CloseButton_pressed():
	visible = false
	sharing = false

func share():
	visible = true
	sharing = true
	$Share/Name.text = ""

func _on_TextureButton_pressed():
	var username = "Player" if $Share/Name.text == "" else $Share/Name.text
	
	var data = {
		"userName": username,
		"score": get_parent().score
	}
	
	var query = JSON.print(data)
	
	var headers = ["Content-Type: application/json"]
	
	$HTTPRequest.request(base_url + "/addScore", headers, false, HTTPClient.METHOD_POST, query)
	
	method = HTTPClient.METHOD_POST
	
	_on_CloseButton_pressed()

func get_scores():
	$HTTPRequest.request(base_url + "/getScores?limit=10", [], false, HTTPClient.METHOD_GET)
	
	method = HTTPClient.METHOD_GET
