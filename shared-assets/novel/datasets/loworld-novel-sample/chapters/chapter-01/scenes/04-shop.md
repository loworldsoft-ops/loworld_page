---
id: scene_02_shop
title: 아카라의 약방
chronicle:
  id: chronicle_shop
  title: 아카라의 지원
  summary: 아카라가 떠나기 전 호신용 장비와 조언을 남겼다.
  category: story
partyUpdates:
  - id: akara
    summary: 아카라가 호신용 장비와 부적을 건네며 북망산 진입 전 마지막 준비를 도왔다.
    status: support
itemDrops:
  - itemId: leather_armor
    title: 경장 획득
    summary: 아카라가 움직임을 해치지 않는 경장을 건네주었다.
  - itemId: iron_helm
    title: 철관 획득
    summary: 음한한 기운을 막기 위한 철관을 챙겼다.
  - itemId: leather_boots
    title: 답운화 획득
    summary: 미끄러운 산길을 버틸 경쾌한 신발을 확보했다.
choices:
  - id: choice_back_to_village
    label: 장시로 돌아간다
    description: 북망산으로 떠날 채비를 마친다.
    nextSceneId: scene_02_village
  - id: choice_leave_now
    label: 장비를 챙기고 바로 북망산으로 향한다
    description: 북문 밖 음산한 돌계단으로 향한다.
    nextSceneId: scene_03_dungeon_entrance
---

약방 주인 아카라는 서둘러 약첩과 목함을 정리하고 있었다. 그녀는 당신을 보자 잠시 손을 멈추고, 오늘 밤이 지나면 이 고을의 기맥이 완전히 뒤틀릴 것이라고 낮게 말했다.

탁자 위에는 경장, 철관, 답운화가 가지런히 놓여 있었다. 아카라는 이 정도는 갖춰야 북망산에 서린 음한한 기운과 사기를 버틸 수 있다고 덧붙였다.

문밖에서는 장시의 소음이 점점 멀어지고 있었다. 북문 쪽으로 향한 이들 가운데 몇은 끝내 돌아오지 못했다는 소문이 귓가에 오래 남았다.
