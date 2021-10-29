from django.urls import include, path

from rest_framework import routers

from api.views import IssueViewSet, DonationViewSet

router = routers.DefaultRouter()
router.register(r'issue', IssueViewSet)
router.register(r'donate', DonationViewSet)

urlpatterns = [
   path('', include(router.urls)),
]