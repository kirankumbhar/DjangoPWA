from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from . models import feed
import json
# Create your views here.
def index(request):
	template='posts/index.html'
	results=feed.objects.all()
	jsondata = serializers.serialize('json',results)
	context={
		'results':results,
		'jsondata':jsondata,
	}
	return render(request,template,context)

def getdata(request):
	results=feed.objects.all()
	jsondata = serializers.serialize('json',results)
	return HttpResponse(jsondata)

def base_layout(request):
	template='posts/base.html'
	return render(request,template)