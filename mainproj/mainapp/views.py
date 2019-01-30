from django.shortcuts import render
from . import models
from django.views import generic

# Create your views here.


def index(request):
    return render(request, 'index.html')


def resume_pdfview(request):
    return render(request, 'mainapp/resume.html')


def solidworks_pdfview(request):
    return render(request, 'mainapp/solidworks.html')


def scrum_pdfview(request):
    return render(request, 'mainapp/scrum.html')

class Documents(generic.TemplateView):
    template_name='mainapp/documents.html'


class SkillList(generic.ListView):
    model=models.Skill
    template_name='mainapp/skill_list.html'
    context_object_name='skills'


class SkillDetail(generic.DetailView):
    model=models.Skill
    template_name='mainapp/skill_detail.html'
    context_object_name='skill_detail'
