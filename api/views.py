from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.http import HttpResponse

class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def create_item(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            item = Item.objects.create(
                partNumber=data['partNumber'],
                name=data['name'],
                price=data['price'],
                type=data['type'],
                brand=data['brand'],
                BT=data['BT'],
                PTR=data['PTR'],
                CAC=data['CAC']
            )
            return JsonResponse({'id': item.id}, status=201)
        except Exception as e:
            return JsonResponse({'error': 'Error creating item'}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def delete_item(request, item_id):
    print("here")
    try:
        item = Item.objects.get(id=item_id)
        item.delete()
        return JsonResponse({'message': 'Item deleted successfully.'})
    except Item.DoesNotExist:
        return JsonResponse({'message': 'Item not found.'}, status=404)
    except Exception as e:
        return JsonResponse({'message': 'An error occurred while deleting the item.'}, status=500)
