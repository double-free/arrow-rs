(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ByteArrayType-for-GenericBinaryType%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1436-1458\">source</a><a href=\"#impl-ByteArrayType-for-GenericBinaryType%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a> for <a class=\"struct\" href=\"arrow_array/types/struct.GenericBinaryType.html\" title=\"struct arrow_array::types::GenericBinaryType\">GenericBinaryType</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Offset\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Offset\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Offset\" class=\"associatedtype\">Offset</a> = O</h4></section></summary><div class='docblock'>Type of offset i.e i32/i64</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" class=\"associatedtype\">Native</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]</h4></section></summary><div class='docblock'>Type for representing its equivalent rust type i.e\nUtf8Array will have native type has &amp;str\nBinaryArray will have type as <a href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\" title=\"primitive u8\">u8</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.PREFIX\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1439\">source</a><a href=\"#associatedconstant.PREFIX\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedconstant.PREFIX\" class=\"constant\">PREFIX</a>: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a> = &quot;Binary&quot;</h4></section></summary><div class='docblock'>“Binary” or “String”, for use in error messages</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DATA_TYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1441-1445\">source</a><a href=\"#associatedconstant.DATA_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"arrow_array/types/trait.ByteArrayType.html#associatedconstant.DATA_TYPE\" class=\"constant\">DATA_TYPE</a>: <a class=\"enum\" href=\"arrow_schema/datatype/enum.DataType.html\" title=\"enum arrow_schema::datatype::DataType\">DataType</a> = _</h4></section></summary><div class='docblock'>Datatype of array elements</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1447-1457\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/types/trait.ByteArrayType.html#tymethod.validate\" class=\"fn\">validate</a>(\n    offsets: &amp;OffsetBuffer&lt;Self::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Offset\" title=\"type arrow_array::types::ByteArrayType::Offset\">Offset</a>&gt;,\n    values: &amp;Buffer,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"arrow_schema/error/enum.ArrowError.html\" title=\"enum arrow_schema::error::ArrowError\">ArrowError</a>&gt;</h4></section></summary><div class='docblock'>Verifies that every consecutive pair of <code>offsets</code> denotes a valid slice of <code>values</code></div></details></div></details>","ByteArrayType","arrow_array::types::BinaryType","arrow_array::types::LargeBinaryType"],["<section id=\"impl-ByteArrayTypeSealed-for-GenericBinaryType%3CO%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/types.rs.html#1328\">source</a><a href=\"#impl-ByteArrayTypeSealed-for-GenericBinaryType%3CO%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/list_array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::list_array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"arrow_array/types/bytes/trait.ByteArrayTypeSealed.html\" title=\"trait arrow_array::types::bytes::ByteArrayTypeSealed\">ByteArrayTypeSealed</a> for <a class=\"struct\" href=\"arrow_array/types/struct.GenericBinaryType.html\" title=\"struct arrow_array::types::GenericBinaryType\">GenericBinaryType</a>&lt;O&gt;</h3></section>","ByteArrayTypeSealed","arrow_array::types::BinaryType","arrow_array::types::LargeBinaryType"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()