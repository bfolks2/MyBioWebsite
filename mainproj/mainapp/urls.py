from django.conf.urls import url
from django.contrib import admin
from mainapp import views

app_name='mainapp'

urlpatterns=[
    url(r'^$',views.SkillList.as_view(),name='list'),
    url(r'^details/(?P<slug>[-\w]+)/$',views.SkillDetail.as_view(),name='details'),
    url(r'^experience/$',views.Documents.as_view(),name='documents'),
    url(r'^resume/$', views.pdfview, name='pdf')
]
