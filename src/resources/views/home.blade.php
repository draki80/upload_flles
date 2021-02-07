@extends('layouts.app')

@section('content')

<App :user="{{ json_encode(Auth::user()) }}"></App>

@endsection
