from django.db import models

class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
