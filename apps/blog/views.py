from django.shortcuts import render

def blog_list(request):
    return render(request, 'blog/list.html')

def blog_detail(request, id):
    return render(request, 'blog/detail.html', {'id': id})