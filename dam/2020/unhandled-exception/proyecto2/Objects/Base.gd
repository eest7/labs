extends StaticBody2D

const LOOP = 24.0

func _process(delta):
	if not $"../Bird".dead:
		position.x -= get_parent().PIPES_SPEED * delta
		
		if position.x < -LOOP: position.x += LOOP
