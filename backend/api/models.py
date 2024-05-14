from django.db import models

class Player(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50, blank=False, null=False)
    strength = models.IntegerField(default=0)
    intelligence = models.IntegerField(default=0)
    mental = models.IntegerField(default=0)
    arms = models.IntegerField(default=0)
    legs = models.IntegerField(default=0)
    stomach = models.IntegerField(default=0)
    back = models.IntegerField(default=0)
    picture = models.ImageField(blank=True, null=True)


    def __str__(self):
        return self.name
    
    def save_strength(self, *args, **kwargs):
        self.calculate_strength()
        super().save(*args, **kwargs)
    
    def calculate_strenght(self):
        self.strength = round(self.intelligence / 2) + round(self.mental / 2) + self.arms + self.legs + self.stomach + self.back

class Enemy(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)
    strength = models.IntegerField(default=0)
    intelligence = models.IntegerField(default=0)
    mental = models.IntegerField(default=0)
    arms = models.IntegerField(default=0)
    legs = models.IntegerField(default=0)
    stomach = models.IntegerField(default=0)
    back = models.IntegerField(default=0)
    picture = models.ImageField(blank=True, null=True)


    def __str__(self):
        return self.name
    
    def save_strength(self, *args, **kwargs):
        self.calculate_strength()
        super().save(*args, **kwargs)
    
    def calculate_strenght(self):
        self.strength = round(self.intelligence / 2) + round(self.mental / 2) + self.arms + self.legs + self.stomach + self.back

class ExerciseType(models.Model):

    INTENSITY_CHOICES = (
        (1, 'Easy'),
        (2, 'Medium'),
        (3, 'Hard'),
    )
    EXERCISE_CHOICES = (
        (1, 'Intelligence'),
        (2, 'Mental'),
        (3, 'Arms'),
        (4, 'Legs'),
        (5, 'Stomach'),
        (6, 'Back'),
    )

    name = models.IntegerField(choices=EXERCISE_CHOICES, null=True, blank=True)
    intensity = models.IntegerField(choices=INTENSITY_CHOICES, null=True, blank=True)

class Exercise(models.Model):
    DIFFICULTY_ONE = 1
    DIFFICULTY_TWO = 2
    DIFFICULTY_THREE = 3
    CHOICES = (
        (1, 'Easy'),
        (2, 'Medium'),
        (3, 'Hard'),
    )
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)
    exercise_type = models.ManyToManyField(ExerciseType, related_name='exercise')
    difficulty = models.IntegerField(choices = CHOICES, null=True, blank=True)
    picture = models.ImageField(blank=True, null=True)

class Timeline(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now_add=True)
    current_day = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.player.name} - Day {self.current_day}"
