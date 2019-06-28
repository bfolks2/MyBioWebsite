from django.conf.urls import url
from . import views

app_name = 'mainapp'

urlpatterns=[
    # url(r'^$',views.SkillList.as_view(),name='list'),
    url(r'^details/(?P<slug>[-\w]+)/$',views.SkillDetail.as_view(),name='details'),
    url(r'^experience/$',views.Documents.as_view(),name='documents'),
    url(r'^resume/$', views.resume_pdfview, name='resume-pdf'),
    url(r'^scrum/$', views.scrum_pdfview, name='scrum-pdf'),
    url(r'^solidworks/$', views.solidworks_pdfview, name='sw-pdf'),
]
