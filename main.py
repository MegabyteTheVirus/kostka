Kostka = 0

def on_gesture_shake():
    global Kostka
    Kostka = randint(0, 6)
    if Kostka == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    if Kostka == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # . .
            . . . . .
            . . . . .
            """)
    if Kostka == 3:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
    if Kostka == 4:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # #
            . . . . .
            . . . . .
            """)
    if Kostka == 5:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    if Kostka == 6:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . # . .
            . . . . .
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
