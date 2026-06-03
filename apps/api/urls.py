from django.urls import path
from . import views

urlpatterns = [
    path('courses/', views.CourseListAPI.as_view(), name='api_courses'),
]