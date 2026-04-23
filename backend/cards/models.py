from django.db import models


class FlashCard(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Tag(models.Model):
    class Color(models.TextChoices):
        CLAY = "clay", "Clay"
        LAVENDER = "lavender", "Lavender"
        MINT = "mint", "Mint"
        SAGE = "sage", "Sage"
        OCHRE = "ochre", "Ochre"
        
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=20, choices=Color.choices)
    
    def __str__(self):
        return self.name
    
    
