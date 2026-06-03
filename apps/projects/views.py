from django.http import HttpResponse

def projects_list(request):
    return HttpResponse("Projects page working")