extends Button

func _ready():
	var button = Button.new()
	button.text = "Click me"
	button.pressed.connect(self._button_pressed)

func _button_pressed():
	print("Hello world!")
