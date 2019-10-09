class Bush extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // 버택스랑 컬러를 동시에 입력
	static GetVertexColor(VertexColor)
	{
		VertexColor.push(vec2(0, 470), vec4(181, 230, 29, 255));
        VertexColor.push(vec2(150, 470), vec4(151, 193, 21, 255));
        VertexColor.push(vec2(75, 400), vec4(151, 193, 21, 255));

        VertexColor.push(vec2(500, 100), vec4(181, 230, 29, 255));
        VertexColor.push(vec2(200, 400), vec4(99, 191, 23, 255));
        VertexColor.push(vec2(800, 400), vec4(99, 191, 23, 255));

        VertexColor.push(vec2(500, 300), vec4(99, 191, 23, 255));
        VertexColor.push(vec2(100, 600), vec4(52, 168, 23, 255));
        VertexColor.push(vec2(900, 600), vec4(52, 168, 23, 255));
	}
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLES, 0, 3]);
        drawlist.push([gl.TRIANGLES, 3, 3]);
        drawlist.push([gl.TRIANGLES, 6, 3]);
    }

    // 오브젝트가 처음 나타날 경우 Update() 전에 호출되는 함수
    Start() {
    }

    // 해당 오브젝트를 클릭할 경우 실행되는 함수
    onMouseClick() {
    }

    // 해당 오브젝트를 마우스로 누르고 있을 때 실행되는 함수(여러번 실행될 수 있음)
    onMousePress() {
    }

    // 1/60초마다 불리는 함수
    Update() {
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a, a, a, 1);

		/*this.Move(vec2(1,0));
		if (this.position[0] >= 1000)
		{
			this.Move(vec2(-1000,0));
		}*/
    }
}