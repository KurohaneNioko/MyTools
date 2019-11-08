# -*- coding: gbk -*- 
code = 'utf-8'
times = ['Unspeakable 4:24',
		 '�ۤ�֎ 4:52',
		 '��`�� 4:33',
		 'Nostalgia 5:49', 
		 'Grip! 4:51',
		 '�ե������󥿥롤��� 4:17',
		 '�ޤ��������� 4:58',
		 'һ�դ�ʼ�ޤ��... 4:42',
		 '�����碌���L�� 5:06',
		 '���饢�� 5:13',
		 '���� 5:01',
		 'Good Night 4:57']
 
total_min = 0
total_sec = 0
print('  TRACK 01 AUDIO\n    TITLE "'+times[0][:-5]+'"\n    INDEX 01 00:00:00\n'
for e in times:
	title, length = e[:-5], e[-4:]
	minmute, second = map(lambda x:int(x), length.split(':'))
	# print(title, minmute, second)
	total_min += minmute
	total_sec += (second+1)
	if total_sec >= 60:
		total_sec -= 60
		total_min += 1
	min_str = str(total_min)
	if len(min_str) == 1:
		min_str = '0' + min_str
	sec_str = str(total_sec)
	if len(min_str) == 1:
		min_str = '0' + min_sec
	print(total_min, ':', total_sec, ':', '00', sep='')
	