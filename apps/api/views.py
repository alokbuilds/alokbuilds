from rest_framework.generics import ListAPIView
from apps.courses.models import Course
from .serializers import CourseSerializer

class CourseListAPI(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer