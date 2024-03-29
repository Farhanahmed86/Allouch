<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Package;
use App\Models\Chat;
use App\Models\Merchandise;





class ProfileController extends Controller
{
     public function getuser(){
        // dd(auth()->user()->id);

        $data = User::with('brand')->where('id' , auth()->user()->id)->first();
        return response()->json(['data'=> $data]);
     }

     public function getbrand(){
      // dd(request()->id);

      $data = User::with('brand')->where('id' , request()->id)->first();
      return response()->json(['data'=> $data]);
   }


     public function getinfluencer(){
      // dd(auth()->user());
        if(auth()->user()->auth_type =='Brand'){
       

         $data = User::where('auth_type' , 'Influencer')->get();
      }
      else{

         $chat = Chat::where('reciever_id' , auth()->user()->id)->pluck('sender_id')->unique();
         // dd($chat);
         $data = User::whereIn('id', $chat)->get();

      }
      return response()->json(['influencer' => $data]);
     }


     public function edit_profile(Request $request){
      //  dd($request->image);

      $request->validate([
        
         'image' => 'max:2048', 
     ]);

     if(isset($request->image)){

        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('uploads'), $filename);
     }
        
         $data = User::where('id' , auth()->user()->id)->first();
         $data->bio = $request->bio;
         $data->facebook = $request->facebook;
         $data->instagram = $request->instagram;
         $data->linkdin = $request->linkdin;
         $data->user_name = $request->username;
         if(isset($request->image)){

            $data->image = $filename;
         }
         $data->save();

         return response()->json(['saved' => true]);






     }


     public function package(Request $request){
      // dd($request->all());

      $data = Package::where('user_id' ,auth()->user()->id)->where('title' , $request->title)->first();
      if($data){
        
         $data->description = $request->description;
         $data->include_1 = $request->Included1;
         $data->include_2 = $request->Included2;
         $data->include_3 = $request->Included3;
         $data->include_4 = $request->Included4;
         $data->hours = $request->hours;
         $data->minutes = $request->minutes;
         $data->price = $request->price;
         $data->save();

      }

      else{
         $package = new Package;

         $package->description = $request->description;
         $package->include_1 = $request->Included1;
         $package->include_2 = $request->Included2;
         $package->include_3 = $request->Included3;
         $package->include_4 = $request->Included4;
         $package->hours = $request->hours;
         $package->minutes = $request->minutes;
         $package->price = $request->price;
         $package->title = $request->title;
         $package->user_id = auth()->user()->id;


         $package->save();
      }


      return response()->json(['saved' => true]);

     }


     public function getpackage(){
      $data = Package::where('user_id' , auth()->user()->id)->get();
      return response()->json(['data' => $data]);
     }


     public function getprofile(){
      // dd(request()->id);

      $data = User::with('brand' , 'package')->where('id' , request()->id)->first();
      return response()->json(['data'=> $data]);
     }

     public function getinfluencers(){
      $data = User::with('package')->where('auth_type' , 'Influencer')->limit(3)->get();
      return response()->json(['data' => $data]);
     }


     public function getallinfluencers(){
      $data = User::with('package')->where('auth_type' , 'Influencer')->get();
      return response()->json(['data' => $data]);
     }


     public function post_influencers( Request $request){

      $data = $request->all();
        $influencer = $data[0];
        $id = $data[1];
      
      $assign = Merchandise::whereIn('id' , $influencer)->get();
 
         foreach($assign as $new){
           $new->assign_to = $id;
           $new->save();
         }

         return response()->json(['saved' => true]);

      }

     
}
