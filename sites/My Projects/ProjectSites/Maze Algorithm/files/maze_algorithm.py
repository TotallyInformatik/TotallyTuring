import turtle


# configuring maze in turtle module (visualization)
def show(maze):
    
    win = turtle.Screen()
    win.tracer(0)

    x = 0 - len(maze[0]) / 2 * 25
    y = 0 + len(maze) / 2 * 25

    for row in maze:
        for col in row:
            if col != " ":

                if col == "x":
                    block = turtle.Turtle(shape="square")
                    block.penup()
                    block.goto(x,y)
                    x += 25

                if col == "o":
                    x += 25
                
                if col == "e" or col == "a":
                    block = turtle.Turtle(shape="circle")
                    block.penup()
                    block.goto(x,y)
                    if col == "e":
                        red = turtle.Turtle("triangle")
                        red.penup()
                        red.goto(x,y)
                        red.pendown()
                        red.color("red")
                    x += 25
        
        y -= 25
        x = 0 - len(maze[0]) / 2 * 25


    new_maze = Maze(maze)
    print(new_maze.get_route())
    new_maze.instructions.reverse()
    print(new_maze.instructions)

    current_instructions_index = 0
    while True:
        try:
            if new_maze.instructions[current_instructions_index] == "right":
                red.goto(red.xcor() + 25,red.ycor())
            elif new_maze.instructions[current_instructions_index] == "left":
                red.goto(red.xcor() - 25,red.ycor())
            elif new_maze.instructions[current_instructions_index] == "up":
                red.goto(red.xcor(), red.ycor() + 25)
            elif new_maze.instructions[current_instructions_index] == "down":
                red.goto(red.xcor(), red.ycor() - 25)
            
            current_instructions_index += 1
        except:
            pass

        try:
            win.update()
        except:
            pass



###################################################################################
# This is the part you can change!
# x = wall, o = path to walk on, e = entrance, a = exit
# change the maze however you want, but just remember to keep the exit from being adjacent to two path blocks ("o")

maze = (
    "xxxxxxxxxxxx",
    "xeooooxoooox",
    "xoxxxoxxxxox",
    "xoxooooxoxox",
    "xoxxoxoxooox",
    "xooxoxxxoxxx",
    "xxoooxooooox",
    "xxoxxxxoxxxx",
    "xooxooooooox",
    "xoxxoxxxxoxx",
    "xooooxooooax",
    "xxxxxxxxxxxx"
)




###################################################################################


class Maze:
    def __init__(self, maze):
        self.maze = maze
        
        # list that contains all x and y position that we have been to!
        self.travelled = []
        
        # list of instructions leading to exit ("right", "left", "up", "down", etc.)
        self.instructions = []
    
    def get_entrance(self):
        for y in range(len(maze)):
            for x in range(len(maze[0])):
                if maze[y][x] == "e":
                    return (y, x) # first y then x, as we use maze[y][x], NOT maze[x][y]



    def get_route(self, current_position=None):

        if not current_position:
            current_position = self.get_entrance()
        
        if maze[current_position[0]][current_position[1]] == "x":
            return False
        elif maze[current_position[0]][current_position[1]] == "a":
            return True
        else:
            

            self.travelled.append(current_position)

            directions_with_possible_route = {}


            # config. directions:
            if (current_position[0], current_position[1] + 1) not in self.travelled:
                directions_with_possible_route["right"] = self.get_route((current_position[0], current_position[1] + 1))

            if (current_position[0], current_position[1] - 1) not in self.travelled:
                directions_with_possible_route["left"] = self.get_route((current_position[0], current_position[1] - 1))

            if (current_position[0] - 1, current_position[1]) not in self.travelled:
                directions_with_possible_route["up"] = self.get_route((current_position[0] - 1, current_position[1]))

            if (current_position[0] + 1, current_position[1]) not in self.travelled:
                directions_with_possible_route["down"] = self.get_route((current_position[0] + 1, current_position[1]))

            # if there is only one direction to go: return the value of the next get_route recursion iteration!
                
            for key in directions_with_possible_route.keys():
                if directions_with_possible_route.get(key) == True:
                    self.instructions.append(key)
                    return True

            return False
        


show(maze)
