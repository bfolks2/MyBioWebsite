from django.db import models
from django.core.urlresolvers import reverse
from django.utils.text import slugify #remove any characters that are not alphanuermica, /'s, or -'s

# Create your models here.

class Skill(models.Model):
    name=models.CharField(max_length=128)
    pro=models.BooleanField(default=True)
    slug=models.SlugField(allow_unicode=True, unique=True)
    description=models.TextField(default='')

    def __str__(self):
        return self.name

    def get_absolute_url(self,**kwargs):
        return reverse('mainapp:detail',kwargs={'slug':self.slug})

    def save(self,*args,**kwargs):
        self.slug=slugify(self.name)
        super().save(*args,**kwargs)
