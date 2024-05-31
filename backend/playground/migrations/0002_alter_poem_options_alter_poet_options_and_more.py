# Generated by Django 5.0.6 on 2024-05-29 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='poem',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='poet',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='verse',
            options={'ordering': ['poem_id', 'vorder']},
        ),
        migrations.AlterField(
            model_name='cat',
            name='parent_id',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='cat',
            name='poet_id',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]