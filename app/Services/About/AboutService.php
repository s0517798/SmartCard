<?php

namespace App\Services\About;

use Illuminate\Http\Request;
use App\Http\Requests\API\AboutRequest;
use App\Http\Requests\API\AboutOrderNumberRequest;

use App\Helpers\FilterHelper;

use App\Services\About\AboutServiceInterface;
use App\Repositories\User\UserEloquentRepository;
use App\Repositories\SocialNetwork\SocialNetworkEloquentRepository;
use App\Repositories\About\AboutEloquentRepository;

use Validator;
use Log;

class AboutService implements AboutServiceInterface
{
    protected $userRepository;
    protected $socialNetworkRepository;
    protected $aboutRepository;

    public function __construct(UserEloquentRepository $userRepository, SocialNetworkEloquentRepository $socialNetworkRepository, AboutEloquentRepository $aboutRepository)
    {
        $this->userRepository = $userRepository;
        $this->socialNetworkRepository = $socialNetworkRepository;
        $this->aboutRepository = $aboutRepository;
    }

    public function index(Request $request)
    {
        $all = FilterHelper::filterSocialNetwork($this->socialNetworkRepository->getAll());
        return $all;
    }

    public function noSelect(Request $request)
    {
        $all = FilterHelper::filterSocialNetwork($this->socialNetworkRepository->getAll());
        $idSelected = [];
        $noSelect = [];
        foreach ($this->userRepository->find($request->user()->id)->about as $key => $value) {
            array_push($idSelected, $value->social_network_id);
        }

        foreach ($all as $key => $value) {
            if (!in_array($value['id'], $idSelected)) {
                array_push($noSelect, $all[$key]);
            }
        }
        return $noSelect;
    }

    public function store(AboutRequest $request)
    {

        $result = $this->aboutRepository->create([
            'order_number' => $this->aboutRepository->maxOrderNumber($request->user()->id) + 1,
            'user_id' => $request->user()->id,
            'social_network_id' => $request->input('social_network_id'),
            'show_button_text' => $request->input('show_button_text'),
            'button_text' => $request->input('button_text'),
            'value' => $request->input('value'),
        ]);
        return FilterHelper::filterAbout($result);
    }

    public function update($id, AboutRequest $request)
    {
        $item = $this->aboutRepository->find($id);
        if ($item) {
            if ($item->user_id == $request->user()->id) {
                $result = $this->aboutRepository->update($id, [
                    // 'user_id' => $request->user()->id,
                    // 'social_network_id' => $request->input('social_network_id'),
                    'show_button_text' => $request->input('show_button_text'),
                    'button_text' => $request->input('button_text'),
                    'value' => $request->input('value'),
                ]);

                if ($result) {
                    return FilterHelper::filterAbout($result);
                }

                return $result;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function updateOrderNumber(Request $request)
    {
        $data = $request->all();
        if (is_array($data)) {
            $rules = [
                'id' => 'required|exists:about,id',
                'order_number' => 'required|exists:about,order_number',
            ];
            foreach ($data as $key => $value) {
                $validator = Validator::make($value, $rules);
                if ($validator->passes()) {
                    $item = $this->aboutRepository->find($value['id']);
                    if ($item) {
                        if ($item->user_id == $request->user()->id) {
                            $this->aboutRepository->update($value['id'], [
                                'order_number' => $value['order_number'],
                            ]);
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return $validator->errors()->all();
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public function destroy($id, Request $request)
    {
        $item = $this->aboutRepository->find($id);
        if ($item) {
            if ($item->user_id === $request->user()->id) {
                $result = $this->aboutRepository->delete($id);
                return $result;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
