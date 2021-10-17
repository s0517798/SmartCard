<?php

namespace App\Services\About;

use Illuminate\Http\Request;
use App\Http\Requests\API\AboutRequest;
use App\Http\Requests\API\AboutOrderNumberRequest;

interface AboutServiceInterface
{
    public function index(Request $request);

    public function noSelect(Request $request);

    public function store(AboutRequest $request);

    public function update($id, AboutRequest $request);

    public function updateOrderNumber(Request $request);

    public function destroy($id, Request $request);
}
