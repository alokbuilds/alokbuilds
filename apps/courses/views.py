from django.shortcuts import render

def course_list(request):
    return render(request, 'courses/course_list.html')

def lesson_view(request, id):
    return render(request, 'courses/lesson.html', {'id': id})