function initialize() {
    //������ͼʵ��
    var map = new BMap.Map('map');
    //����һ������
    var point =new BMap.Point(113.264641,23.154905);
    //��ͼ��ʼ�����������ĵ�����͵�ͼ����
    map.centerAndZoom(point,15);
}
window.onload = initialize;