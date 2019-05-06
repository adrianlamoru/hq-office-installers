from django.urls import include, path
from rest_framework import routers
from hq_server import views

router = routers.DefaultRouter()
router.register(r'data', views.DataViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]