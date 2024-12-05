from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

#파일 업로드 api
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .models import UploadedFile

class FileUploadView(APIView): 
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        file = request.FILES.get('file')
        description = request.data.get('description', '')
        uploaded_file = UploadedFile.objects.create(file=file, description=description)
        return Response({
            "file_id": uploaded_file.id,
            "file_name": uploaded_file.file.name,
            "description": uploaded_file.description,
            "uploaded_at": uploaded_file.uploaded_at,
        })

#파일 다운로드 api
from django.http import FileResponse

class FileDownloadView(APIView):
    def get(self, request, file_id):
        try:
            uploaded_file = UploadedFile.objects.get(id=file_id)
            file_path = uploaded_file.file.path
            return FileResponse(open(file_path, 'rb'), as_attachment=True)
        except UploadedFile.DoesNotExist:
            return Response({"error": "File not found"}, status=404)
