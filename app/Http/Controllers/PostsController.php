<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResources;
use Illuminate\Http\Response;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $posts = Post::all(['id','title','description']);
        // return response()->json($posts);

        return response()->json(
            [
                'message' => "posts retuned successfully",
                'posts' =>  PostResources::collection(Post::get()),
            ],
            Response::HTTP_ACCEPTED
        );
        // PostResources::collection(Post::get());

    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Post  $post)
    {
        $post = Post::create($request->post());
        return response()->json([
            'message' => 'Post Created Successfully!!!',
            'post' => $post
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);

        return response()->json(
            [
                'message' => "posts retuned successfully",
                'data' => $post,
            ],
            Response::HTTP_ACCEPTED
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $post->fill($request->post())->save();
        return response()->json([
            'message' => 'Post Updated Successfully!!!',
            'post' => $post
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post, $id): Response
    {

        $post->find($id)->delete();
        return response()->noContent();

        // $post->delete();
        // return response()->json([
        //     'message' => 'Post Deleted Successfully!!!'
        // ]);
    }
}
