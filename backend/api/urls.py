from django.urls import path
from .views import FileUploadView, FileDownloadView

urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file-upload'),  # 비디오 업로드 엔드포인트
    path('download/<int:file_id>/', FileDownloadView.as_view(), name='file-download'),  # 파일 다운로드 엔드포인트
] 