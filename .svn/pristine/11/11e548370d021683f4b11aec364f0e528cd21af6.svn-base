<template>
	<div class="container-fluid">
		<section id="section1">
			<div class="container">
				<h5>{{ positions[$route.params.id].city }}, {{ positions[$route.params.id].country }}</h5>
	 			<h1>{{ positions[$route.params.id].title }}</h1>
	 		</div>
		</section>

		<section id="section2">
			<div class="container">
				<div v-html="positions[$route.params.id].detail" class="careers-detail"></div>
				<router-link to="/careers" tag="button" class="v-btn">back</router-link>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				positions: [
					{ 
						title: 'IT Team Lead', 
						city: 'Seoul/Singapore', 
						country: 'Korea/Singapore', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>모바일 및 PC게임 시스템/네트워크/보안 설계 및 운영</li><li>게임 시스템 배포/구성/모니터링/문제해결</li><li>BI 시스템 개발 및 운영</li><li>데이터 플로우 분석 및 모니터링</li><li>데이터센터 시스템 구성 및 관리</li><li>데이터 운영에 필요한 데이터베이스 및 시스템 구성 변경/관리</li><li>재해 복구 계획 수립</li><li>네트워크 및 보안 관리 (해킹, DDoS 방어)</li><li>정기적인 데이터 분석 및 데이터 불일치 수정</li><li>최신 트렌드 및 이슈 검토 후 개선 방안 제안</li><li>긴급 이슈 대응을 위한 24x7 서비스</li></ul><p><strong>자격 요건</strong></p><ul><li>컴퓨터 공학을 전공하였거나, 이에 준하는 기술을 보유한 자</li><li>데이터베이스 개발 및 운영 경험 필수 (MS SQL 2012, 2014, 2016 and MySQL)</li><li>스토리지 관리 경험 보유(SAN/NAS/DAS/iSCSI)</li><li>NMS 솔루션 운영 경험 보유 (SNMP, Zabbix, Nagios, MRTG)</li><li>방화벽/VPN 시스템 운영 경험 보유 (Juniper, Cisco)</li><li>웹 기술에 대한 이해 (IIS, Apache, Tomcat, Java script)</li><li>뛰어난 문제 해결 능력 및 커뮤니케이션 기술 보유</li></ul><p><strong>우대사항</strong></p><ul><li>스스로 계획을 세우고 빠른 변화하는 환경에 대응하여 독립적으로 일을 추진할 수 자</li><li>ITIL V3, MCDBA, OCP, CCNA, MCSE</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>포트폴리오</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '게임 기획자(Game Designer)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong</p><ul><li>게임모드, 시스템, 컨텐츠 기획 전반</li><li>BM, 밸런스, 이벤트, 보상 기획 전반</li></ul><p><strong>자격 요건</strong></p><ul><li>논리적 사고 및 분석적 시각 보유</li><li>원활한 커뮤니케이션 능력 보유</li><li>업무에 필요한 문서 작성 및 커뮤니케이션 능력 보유</li><li>FPS 게임 디자인에 대한 제반 지식 보유</li><li>온라인 PC게임/모바일게임 서비스 경험자</li></ul><p><strong>우대사항</strong></p><ul><li>글로벌 게임서비스 경험자 우대</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>경력기술서 (경력자에 한함)</li><li>포트폴리오 (필수)</li><li>1차 면접 시 제출한 포트폴리오에 대한 브리핑을 진행합니다.</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '클라이언트 프로그래머(Client Programmer)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>컨텐츠 개발 및 최적화</li><li>테스트</li></ul><p><strong>자격 요건</strong></p><ul><li>모바일 경력 3년 이상</li><li>C# 중급 이상, C++에 대한 이해도</li><li>3D 프로그래밍</li><li>자료구조, 알고리즘에 대한 이해도</li><li>리소스/데이터 관리 및 퍼포먼스 최적화</li><li>원만한 커뮤니케이션</li><li>능동적이고 적극적인 업무 태도</li></ul><p><strong>우대사항</strong></p><ul><li>FPS 개발 선호자</li><li>Android/iOS 네이티브 프로그래밍에 대한 경험자</li><li>유니티 3D게임 개발 및 출시 경험자</li><li>모바일 서비스 관련 3rd party 라이브러리 경험자</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>경력기술서 (경력 지원 시)</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '클라이언트 프로그래머(Client Programmer, PC)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>게임브리오 엔진을 활용한 FPS게임 개발</li><li>컨텐츠 개발 및 유지보수</li></ul><p><strong>자격 요건</strong></p><ul><li>C++ 중급 이상</li><li>3D 프로그래밍</li><li>자료구조, 알고리즘에 대한 이해도</li><li>리소스/데이터 관리 및 퍼포먼스 최적화</li><li>원만한 커뮤니케이션</li><li>능동적이고 적극적인 업무 태도</li></ul><p><strong>우대사항</strong></p><ul><li>FPS 개발 선호자</li><li>게임브리오 엔진 경험자</li><li>컨텐츠 및 UI 개발 경험자</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>경력기술서 (경력 지원 시)</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '프론트엔드 개발자(Front-End Developer)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>사용자 지향 기능 개발</li><li>향후 재사용 가능한 코드 그리고 라이브러리 구축</li><li>UI/UX 디자인에 대한 기술적인 타당성 검수</li><li>속도 및 확장성에 대한 최적화 작업</li><li>타부서와의 협업을 통한 UX 설계 및 구조화</li></ul><p><strong>자격 요건</strong></p><ul><li>컴퓨터 공학을 전공하였거나, 이에 준하는 기술을 보유한 자 </li><li>스스로 계획을 세우고 빠른 변화하는 환경에 대응하여 독립적으로 일을 추진할 수 자</li><li>2년 이상의 관련 업무 경험</li><li>HTML5, CSS3을 포함한 웹 마크 업에 대한 이해</li><li>SASS와 같은 server-side CSS 전처리 플랫폼에 대한 이해</li><li>클라이언트 스크립트 중심의 JQuery와 같은 자바스크립트 프레임워크에 대한 이해</li><li>브라우저 간 호환성 문제에 대한 이해 및 빠른 해결 능력</li><li>SVN, Git과 같은 소스코드 버전 관리 툴에 대한 이해</li><li>최신 자바스크립트 라이브러리 그리고 프레임워크에 대한 이해 (AngularJS, VueJS, 기타)</li><li>Ajax를 통한 동적 컨텐츠 갱신에 대한 이해</li><li>UI/UX 에 대한 이해</li><li>포토샵과 같은 이미지를 가공하는 작업에 대한 숙련도</li><li>뛰어난 문제 해결 능력 및 커뮤니케이션 기술 보유</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>경력기술서 (경력 지원 시)</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '데브옵스 엔지니어(DevOps Engineer)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>모바일 및 PC게임 시스템/네트워크/보안 설계 및 운영</li><li>게임 시스템 배포/구성/모니터링/문제해결</li><li>BI 시스템 개발 및 운영</li><li>데이터 플로우 분석 및 모니터링</li><li>데이터센터 시스템 구성 및 관리</li><li>데이터 운영에 필요한 데이터베이스 및 시스템 구성 변경/관리</li><li>재해 복구 계획 수립</li><li>네트워크 및 보안 관리 (해킹, DDoS 방어)</li><li>정기적인 데이터 분석 및 데이터 불일치 수정</li><li>최신 트렌드 및 이슈 검토 후 개선 방안 제안</li><li>긴급 이슈 대응을 위한 24x7 서비스</li></ul><p><strong>자격 요건</strong></p><ul><li>컴퓨터 공학을 전공하였거나, 이에 준하는 기술을 보유한 자</li><li>데이터베이스 개발 및 운영 경험 필수 (MS SQL 2012, 2014, 2016 and MySQL)</li><li>스토리지 관리 경험 보유(SAN/NAS/DAS/iSCSI)</li><li>NMS 솔루션 운영 경험 보유 (SNMP, Zabbix, Nagios, MRTG)</li><li>방화벽/VPN 시스템 운영 경험 보유 (Juniper, Cisco)</li><li>웹 기술에 대한 이해 (IIS, Apache, Tomcat, Java script)</li><li>뛰어난 문제 해결 능력 및 커뮤니케이션 기술 보유</li></ul><p><strong>우대사항</strong></p><ul><li>스스로 계획을 세우고 빠른 변화하는 환경에 대응하여 독립적으로 일을 추진할 수 자</li><li>ITIL V3, MCDBA, OCP, CCNA, MCSE</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>포트폴리오</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: 'Game Operations Associate(Translator)', 
						city: 'Vancouver', 
						country: 'Canada', 
						detail: '<p><strong>Vertigo Games America, Inc.</strong></p><p>Vertigo Games America is an innovative publishing company for PC online game products. Having started as a game development company specializing in deep and competitive online first-person shooter games, our company recently also stepped into the realm of game servicing and publishing. Beginning with the servicing of our FPS title \'BlackShot\', developed in-studio, in the North American and European markets in 2015, our publishing efforts have since expanded with the launch of our publishing platform \'Papaya Play\' in 2016.<br/><br/>The Papaya Play team is comprised of experienced publishers and talented individuals who strive daily to maintain a standard of excellence. Moving forward, our team will continue to expand and provide exceptional gaming experiences to the online marketplace and beyond, and to help us do so we are looking for a professional to work with our communities and assist with upcoming game products.</p><br/><p><strong>Duties and Responsibilities</strong</p><ul><li>Lead localizing the game and event content to Portuguese or other languages.</li><li>Ensure player satisfaction by responding timely and accurately to player\'s complaints and disputes.</li><li>Work with Marketing to manage the company\'s game communities and develop plans to maintain & boost the communities.</li><li>Assist in designing and executing in-game and web-based content and events to enhance the game experience.</li><li>Maintain and improve game products quality by investigating and documenting complex issues with regards to bugs, exploits, trade and/or any other potential issues.</li><li>From information gathered from the community and experience from yourself, suggest any possible improvements for game products.</li><li>Develop and maintain a healthy relationship with players.</li><li>Show strong teamwork with your colleagues and work closely with the Managers to meet any goals and deadlines.</li></ul><p><strong>Qualifications</strong></p><ul><li>Fluent in English & Portuguese (or Turkish)</li><li>1-2 years in online game related experience will be highly valued.</li><li>Any experience with FPS is a plus.</li><li>Excellent interpersonal, communication skill and know how to work as a team.</li><li>Excellent computer software skills, especially in MS Office products.</li><li>Able to multitask.</li><li>Strong sense of professionalism.</li><li>Desire to be part of a growing, innovative business.</li><li>Have a passion for games, and willing to have fun!</li></ul><p><strong>Links</strong></p><ul><li>Portal Site: <a href="https://www.papayaplay.com" targer="_blank">https://www.papayaplay.com</a></li></ul><p><strong>Required Experience & Languages</strong></p><ul><li>In online game: one year</li><li>Turkish or Portuguese</li></ul><br><p><a href="mailto:vancouver.hr@vertigogames.com" target="_top">vancouver.hr@vertigogames.com</a></p>' 
					},
					{ 
						title: 'Graphic Designer', 
						city: 'Vancouver', 
						country: 'Canada', 
						detail: '<p><strong>Vertigo Games America, Inc.</strong></p><p>Vertigo Games America is an innovative publishing company for PC online game products. Having started as a game development company specializing in deep and competitive online first-person shooter games, our company recently also stepped into the realm of game servicing and publishing. Beginning with the servicing of our FPS title \'BlackShot\', developed in-studio, in the North American and European markets in 2015, our publishing efforts have since expanded with the launch of our publishing platform \'Papaya Play\' in 2016.<br/><br/>The Papaya Play team is comprised of experienced publishers and talented individuals who strive daily to maintain a standard of excellence. Moving forward, our team will continue to expand and provide exceptional gaming experiences to the online marketplace and beyond, and to help us do so we are looking for a professional to work with our communities and assist with upcoming game products.</p><br/><p><strong>Duties and Responsibilities</strong</p><ul><li>Research and brainstorm with the team to develop visual direction and theme for company\'s website and microsites</li><li>Create compelling and consistent web design for company\'s website and microsites</li><li>Control and manage consistency and quality of all design assets including videos</li><li>Assess layout/wireframe and give an estimated time schedule for completion of visual prototype</li><li>Deliver design assets and style guide to front-end developer</li></ul><p><strong>Qualifications</strong></p><ul><li>Degree in Graphics/Web Design or equivalent experience (at least 2 years experience working as graphic designer)</li><li>Excellent knowledge of Adobe Create Suite</li><li>Able to work efficiently and meet project deadlines with minimal supervision</li><li>Strong organizational skills and ability to multi-task and shift between projects on a time-sensitive basis</li><li>Fluency in Korean (or Portuguese) is a plus</li></ul><p><strong>Please include your portfolio or link to your portfolio in your application</strong></p><p><strong>Links</strong></p><ul><li>Portal Site: <a href="https://www.papayaplay.com" targer="_blank">https://www.papayaplay.com</a></li></ul><p><strong>Required Experience</strong></p><ul><li>Graphic Design: two years</li></ul><br><p><a href="mailto:vancouver.hr@vertigogames.com" target="_top">vancouver.hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '그래픽 디자이너(Graphic Designer)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong></p><ul><li>회사 글로벌 서비스 마케팅/브랜딩/PR 관련 그래픽 업무 (기획 포함)</li><li>기업홍보를 위한 마케팅 이미지 제작 (홈페이지, SNS홍보용 이미지 등)</li><li>PC/모바일 게임 컨텐츠 마케팅 어셋 제작 (아이콘, 스크린샷, 배너, 포스터 등)</li><li>온라인/오프라인 광고 이미지 제작</li><li>SNS 홍보용 마케팅 이미지 제작</li></ul><p><strong>자격 요건</strong></p><ul><li>게임 마케팅 디자인에 대한 기본적인 지식을 갖추신 분</li><li>마케팅 디자인 업무 경력 2~5년 이상</li><li>Photoshop, InDesign, Illustrator 등 활용 우수자</li></ul><p><strong>우대사항</strong></p><ul><li>사업적으로 고객들에게 전달하고자 하는 방향을 그래픽적으로 잘 표현해주실 수 있으신 분</li><li>다양한 멀티미디어 디자인 작업이 가능하신 분</li><li>외국어 능력 및 해외 경험자 우대</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>포트폴리오</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: '주니어 애니메이터(Junior Animator)', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.</p><br/><p><strong>담당 업무</strong</p><ul><li>FPS게임 애니메이션</li></ul><p><strong>자격 요건</strong></p><ul><li>게임 애니메이션 3년 이하 (신입 가능)</li></ul><p><strong>우대사항</strong></p><ul><li>Maya 사용 경험자</li><li>Motion Builder 사용 경험자</li><li>Unity & Gamebryo 사용 경험자</li><li>Tool 전환에 거부감이 적으신 분</li><li>FPS게임 애니메이션 경험자</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>포트폴리오</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					},
					{ 
						title: 'Assistant Product Manager', 
						city: 'Seoul', 
						country: 'Korea', 
						detail: '<p><strong>버티고우 게임즈 소개</strong></p><p>(주)버티고우게임즈는 국내 유명 게임회사에 초기부터 몸 담았던 사람들이 그 경험을 토대로 설립한 차세대 온라인 게임 개발사입니다. 버티고우게임즈의 첫 타이틀인 블랙샷(Blackshot)은 밀리터리 컨셉인 빠르고 호쾌한 타격감을 추구하는 Light & Casual FPS게임이며 2008년 국내에서 첫 정식 서비스를 시작한 이후 현재 싱가폴 말레이시아를 중심으로 한 동남아시아 및 유럽 42개 지역에서 서비스 중입니다. 올해부터는 PC온라인 게임뿐만 아닌 모바일 게임으로 사업을 확장해나갈 계획이며, 게임 제작기술과 노하우를 바탕으로 온라인 글로벌 게임 퍼블리셔로 성장해나갈 것입니다.<br/><br/><strong style=\'color:#000;\'>사업팀에서 게임서비스에 필요한 업무를 주도적으로 알아서 스스로 잘할 수 있는 인재를 채용합니다!</strong></p><br/><p><strong>담당 업무</strong</p><ul><li>FPS 게임 서비스 및 라이브에 필요한 업무 진행</li><li>퍼블리셔와 개발 조직 사이에서 커뮤니케이션</li><li>SNS 관리</li></ul><p><strong>자격 요건</strong></p><ul><li>원활한 커뮤니케이션 스킬</li><li>게임에 열정이 많으신 분</li><li>영어 능력</li></ul><p><strong>우대사항</strong></p><ul><li>게임PM 경험</li><li>소셜 채널 운영 경험</li></ul><p><strong>혜택 및 복지</strong></p><ul><li>즐거운 주말 휴식을 위해 매주 금요일은 전직원 조기 퇴근</li><li>야근이 잦지 않고 쾌적한 환경에서 일할 수 있는 글로벌 회사</li><li>연간 사용할 수 있는 복지 금액 제공</li><li>각종 경조휴가 및 경조금 지원</li><li>검강검진, 연금보험 복지 제공</li></ul><p><strong>전형절차</strong></p><ul><li>서류심사 -> 1차 면접(실무자) -> 2차 면접(임원진) -> 합격자 발표</li></ul><p><strong>제출서류</strong></p><ul><li>이력서</li><li>자기소개서</li><li>경력기술서(경력자에 한함)</li><li>포트폴리오</li></ul><br><p><a href="mailto:hr@vertigogames.com" target="_top">hr@vertigogames.com</a></p>' 
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/variables.scss';
	@import '../../assets/css/global.scss';

	#section1 {
		@extend .top-banner;
		background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/careers/banner-detail.jpg');
	}

	#section2 {
		padding-top: 40px;

		.v-btn {
			width: 120px;
			margin: 30px 0 50px;
		}
	}
</style>