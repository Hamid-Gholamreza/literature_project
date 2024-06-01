from djoser.serializers import (UserSerializer as BaseUserSerializer,
                                UserCreateSerializer as BaseUserCreateSerializer,
                                UserCreatePasswordRetypeSerializer as BaseUserCreatePasswordRetypeSerializer)


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ["id", "username", "password", "email", "first_name", "last_name"]


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ["id", "username", "email", "first_name", "last_name"]
        ref_name = 'myaccount.User'


class UserCreatePasswordRetypeSerializer(BaseUserCreatePasswordRetypeSerializer):
    class Meta(BaseUserCreatePasswordRetypeSerializer.Meta):
        fields = ["id", "username", "email", "first_name", "last_name", "password"]
