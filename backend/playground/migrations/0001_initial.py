# Generated by Django 5.0.6 on 2024-05-31 19:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('poet_id', models.PositiveIntegerField(blank=True, null=True)),
                ('parent_id', models.PositiveIntegerField(blank=True, null=True)),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'verbose_name': '',
                'verbose_name_plural': '1. دسته بندی ها',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Poet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=55)),
                ('description', models.TextField(blank=True, null=True)),
                ('cat_id', models.ManyToManyField(to='playground.cat')),
            ],
            options={
                'verbose_name': '',
                'verbose_name_plural': '2. شاعران',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Poem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='poets', to='playground.poet')),
            ],
            options={
                'verbose_name': '',
                'verbose_name_plural': '3. اشعار',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Verse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vorder', models.IntegerField()),
                ('position', models.IntegerField()),
                ('text', models.TextField()),
                ('poem_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='poems', to='playground.poem')),
            ],
            options={
                'verbose_name': '',
                'verbose_name_plural': '4. متن اشعار',
                'ordering': ['poem_id', 'vorder'],
            },
        ),
    ]
