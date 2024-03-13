from django.contrib import admin

# Register your models here.
from api.models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ['body','completed','created']


admin.site.register(Todo,TodoAdmin)