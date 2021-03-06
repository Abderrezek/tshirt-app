<x-app-layout>
    <x-slot name="title">T-shirts - rĂ©initialiser le mot de passe</x-slot>

    <div class="text-center">
        <h1 class="mt-5 mb-3 text-center">{{ Str::upper('RĂ©initialiser le mot de passe') }}</h1>

        <p class="my-3 fs-5">
            RĂ©initialiser le mot de passe
        </p>
    </div>

    <div class="w-50 mt-3 mb-5 mx-auto">
        <livewire:auths.reset-password :token="$request->token" :email="$request->email" />
    </div>
</x-app-layout>