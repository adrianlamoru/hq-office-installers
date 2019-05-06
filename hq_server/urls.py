from django.contrib import admin
from django.urls import path,include
#from django.conf.urls import include, url
from rest_framework import routers
from hq_form import views

router = routers.DefaultRouter()
router.register(r'data', views.DataViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
