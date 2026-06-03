from django.urls import path
from .views import course_list, lesson_view

app_name = 'courses'

urlpatterns = [
    path('', course_list, name='list'),
    path('lesson/<int:id>/', lesson_view, name='lesson'),
]