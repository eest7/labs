extends Node2D

func _ready():
	visible = false

func flash():
	visible = true
	
	$AnimationPlayer.play("flash")

func _on_AnimationPlayer_animation_finished(anim_name):
	visible = false
