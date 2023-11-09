from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ItemList.as_view(), name='item-list'),
    path('items/<int:pk>/', views.ItemDetail.as_view(), name='item-detail'),
    path('items/', views.create_item, name='create_item'),
    path('items/<int:item_id>/', views.delete_item, name='delete_item')
]
