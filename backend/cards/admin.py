from django.contrib import admin

from .models import FlashCard, Tag


@admin.register(FlashCard)
class FlashCardAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description")
    search_fields = ("name", "description")
    
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "color")
    search_fields = ("name", "color")
