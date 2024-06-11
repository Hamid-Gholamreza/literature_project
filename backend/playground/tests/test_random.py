from rest_framework.test import APIClient
from rest_framework import status
from django.test import RequestFactory
from playground.views import random_verse
from playground.models import Verse
import pytest


@pytest.fixture
def request_factory():
    return RequestFactory()

@pytest.mark.django_db
def test_random_verse(request_factory):
    request = request_factory.get("/random")
    response = random_verse(request)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) >= 0
    assert all(isinstance(item, dict) for item in response.data)

@pytest.mark.django_db
def test_random_verse_no_verses(request_factory):
    request = request_factory.get("/random_verse/")
    response = random_verse(request)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 0
