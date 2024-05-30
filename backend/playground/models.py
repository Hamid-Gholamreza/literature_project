from django.db import models


class Cat(models.Model):
    name = models.CharField(max_length=40)
    poet_id = models.PositiveIntegerField(null=True, blank=True)
    parent_id = models.PositiveIntegerField(null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        ordering = ['name']
        verbose_name = ''
        verbose_name_plural = '1. دسته بندی ها'

class Poet(models.Model): # شاعر
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    cat_id = models.ManyToManyField(Cat)


    def __str__(self) -> str:
        return self.name
    
    class Meta:
        ordering = ['id']
        verbose_name = ''
        verbose_name_plural = '2. شاعران'

class Poem(models.Model): # شعر
    title = models.CharField(max_length=50)
    artist = models.ForeignKey(Poet, on_delete=models.PROTECT, related_name='poets')



    def __str__(self) -> str:
        return self.title
    
    class Meta:
        ordering = ['id']
        verbose_name = ''
        verbose_name_plural = '3. اشعار'

class Verse(models.Model):
    vorder = models.IntegerField() # 1, 2, 3, 4, ...
    position = models.IntegerField() # 0, 1
    text = models.TextField()
    poem_id = models.ForeignKey(Poem, on_delete=models.CASCADE, related_name='poems')

    def __str__(self) -> str:
        return self.text
    
    class Meta:
        ordering = ['poem_id', 'vorder']
        verbose_name = ''
        verbose_name_plural = '4. متن اشعار'