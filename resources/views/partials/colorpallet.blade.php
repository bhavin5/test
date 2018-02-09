
@foreach($pallet_colors as $color)

<div style="background-color: rgb({{ implode(',',$color); }}); height:30px; width:50px; float:left; border:1px solid;">
	
	<input type="checkbox"  name="color[]" style="" value=" {{ implode(',',$color); }}" >
	
</div>

@endforeach

@if($errors->has('color'))
	<code>{{ $errors->first('color') }}</code>
@endif

