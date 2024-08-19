extends Node2D

@export var tile_id: int = 0
@export var tilemap_node_path: NodePath

var tilemap: TileMapLayer

func _ready():
	tilemap = get_node(tilemap_node_path) as TileMapLayer
	if tilemap == null:
		push_error("TileMapLayer node not found. Make sure the TileMapLayer node path is correct.")

func _input(event):
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		var mouse_position = event.position
		if tilemap:
			var cell_position = tilemap.local_to_map(mouse_position)
			if tilemap.get_cellv(cell_position) == tile_id:
				# If the tile at the position is the same as the one you want to place, remove it
				remove_tile(cell_position)
			else:
				# Otherwise, place the tile at the position
				place_tile(cell_position, tile_id)
		else:
			push_error("TileMapLayer is null. Make sure it is properly assigned.")

func place_tile(cell_position: Vector2i, tile_id: int):
	tilemap.set_cellv(cell_position, tile_id)

func remove_tile(cell_position: Vector2i):
	tilemap.set_cellv(cell_position, -1)
