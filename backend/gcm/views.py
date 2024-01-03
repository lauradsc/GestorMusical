from rest_framework.views import APIView
from .models import Artista
from .serializers import ArtistaSerializer
from django.http.response import JsonResponse
from django.http.response import Http404
from rest_framework.response import Response

class ArtistaViewSet(APIView):

    def get_artista(self, pk):
        try: 
          gcm = Artista.objects.get(ArtistaID=pk)
          return gcm

        except Artista.DoesNotExist():
            raise JsonResponse("Artista não encontrado", safe=False)

    def get(self, request, pk=None):
        if pk: 
            data = self.get_artista(pk)
            serializer = ArtistaSerializer(data)
        else: 
            data = Artista.objects.all()
            serializer = ArtistaSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = ArtistaSerializer(data=data)

        if serializer.is_valid(): 
            serializer.save()
            return JsonResponse("Artista Criado com Sucesso", safe=False)
        return JsonResponse("Falha ao criar Artista", safe=False)

    def patch(self, request, pk="None"):
        artista_to_update = Artista.objects.get(ArtistaID=pk)
        serializer = ArtistaSerializer(instance=artista_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Artista atualizado com Sucesso", safe=False)
        return JsonResponse("Falha ao atualizar artista")

    def delete(self, request, pk=None):
        artista_to_delete = Artista.objects.get(ArtistaID=pk)
        artista_to_delete.delete()
        return JsonResponse("Artista deletado com Sucesso", safe=False)

