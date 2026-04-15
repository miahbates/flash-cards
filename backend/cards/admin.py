from django.contrib import admin

from .models import FlashCard


@admin.register(FlashCard)
class FlashCardAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description")
    search_fields = ("name", "description")
