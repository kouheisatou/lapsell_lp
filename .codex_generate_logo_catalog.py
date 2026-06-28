from pathlib import Path
import csv

root = Path("icons")
out = root / "logo_catalog.md"
entries = []

entries.extend(
    [
        {
            "group": "ステージ初期ロゴ",
            "file": "stage_logos/stage_curtain_back.png",
            "title": "ステージの幕の裏側",
            "story": "客席から見えない幕の裏側に、表舞台へ出る前の本物の時間がある。",
            "intent": "重い幕の端と裏側の余白を抽象化し、見えない場所に価値があることを伝える。",
        },
        {
            "group": "ステージ初期ロゴ",
            "file": "stage_logos/stage_wing_drape_waiting.png",
            "title": "袖幕の下の待機",
            "story": "出番前に暗幕の下で待つ時間も、活動の一部として残す。",
            "intent": "上から垂れる暗幕と小さな待機点で、まだ光が当たる前の緊張感を表す。",
        },
        {
            "group": "ステージ初期ロゴ",
            "file": "stage_logos/stage_outside_spotlight.png",
            "title": "スポットライトの外側",
            "story": "光が当たらないステージ端にも、ファンにとって知りたい価値がある。",
            "intent": "光の円弧の外に小さな印を置き、中心ではない場所の特別さを示す。",
        },
    ]
)

text = (root / "icon_ideas.md").read_text(encoding="utf-8")
section = None
idx = 0
for line in text.splitlines():
    if line.startswith("## "):
        section = line[3:].strip()
        continue

    stripped = line.strip()
    if ". **" in stripped and stripped[0:1].isdigit():
        start = stripped.find("**") + 2
        end = stripped.find("**", start)
        if start >= 2 and end > start:
            idx += 1
            entries.append(
                {
                    "group": f"基本アイコン85案 / {section}",
                    "file": f"icon_ideas_png/idea_{idx:03d}.png",
                    "title": stripped[start:end],
                    "story": "",
                    "intent": "",
                }
            )
            continue

    if entries and entries[-1]["group"].startswith("基本アイコン85案"):
        if stripped.startswith("- ストーリー:"):
            entries[-1]["story"] = stripped.replace("- ストーリー:", "", 1).strip()
        elif stripped.startswith("- 具体デザイン:"):
            entries[-1]["intent"] = stripped.replace("- 具体デザイン:", "", 1).strip()

plus20 = [
    ("plus_01_curtain_slit_outside_light.png", "幕の隙間と光の外側", "幕裏にある一瞬が、スポットライトの外でも価値を持つ。", "二枚の幕のスリットと光の円弧外の点で、裏側と非中心性を同時に示す。"),
    ("plus_02_hanging_drape_selected_dot.png", "垂れ幕下の選ばれた点", "暗幕の下で待つ小さな時間が、次に表へ出る準備として選ばれる。", "上からの暗幕、下の一点、触れない光の円弧で出番前の価値を表す。"),
    ("plus_03_curtain_tag_spot_boundary.png", "幕裏タグと境界線", "隠れた断片に所有のしるしを付け、公開される光との境目に置く。", "布タグ、幕の折り返し、スポット境界線を小さくまとめる。"),
    ("plus_04_stage_wing_shadow_corner.png", "袖の影角", "舞台袖とステージ端が交わる場所に、準備の時間が溜まる。", "縦の影面と水平のステージラインで、裏と表の角を作る。"),
    ("plus_05_folded_curtain_shadow_ring.png", "折り目の影スポット", "幕の折り目の奥にある時間が、知っている人だけのスポットになる。", "縦の布折り線と小さな影の輪で、暗い特別感を作る。"),
    ("plus_06_light_slit_milestone.png", "光のスリットと節目", "表に出る直前の細い光が、成長途中の節目として残る。", "幕間の光と小さな節目印を組み合わせ、開演前の一瞬を強調する。"),
    ("plus_07_backstage_corridor_light_circle.png", "舞台裏導線と光円", "ステージへ向かう道は、光の中心ではなく外側を通って価値になる。", "奥へ続く細い導線と横にずれた光の円で、裏動線を表す。"),
    ("plus_08_hidden_frame_unlit_edge.png", "隠れたフレーム", "未公開の一コマが、光の届かない端で受け取られるのを待つ。", "閉じたフレーム、幕の帯、光の外側の点を重ねる。"),
    ("plus_09_breath_under_drape_arc.png", "暗幕下の呼吸", "出番前に息を整える時間が、ファンにとって知りたい裏側になる。", "小さな点と呼吸の波紋、短い暗幕、離れた光の弧で構成する。"),
    ("plus_10_curtain_edge_ownership_bracket.png", "幕端の所有括弧", "光が届く前の一瞬を、自分の手元に包む。", "幕の縦線、点、括弧状の囲いを使い、所有感を出す。"),
    ("plus_11_blackout_curtain_slit.png", "暗転のスリット", "暗転中にも、次の瞬間を作る小さな動きがある。", "黒い面と細いスリット、小さな点だけで暗転中の気配を示す。"),
    ("plus_12_floor_mark_curtain_shadow.png", "床印と幕影", "舞台袖の足元にある練習位置も、表に出る前の価値になる。", "床テープ、幕影、光の弧を組み合わせ、練習の場所性を出す。"),
    ("plus_13_backstage_tag_under_surface.png", "水面下の裏タグ", "見えない努力に、正式な所有のタグを付ける。", "水平線、下側の小さなタグ点、上側の光弧で水面下の価値を表す。"),
    ("plus_14_hidden_halo_curtain_back.png", "隠れた光輪", "幕の裏にある小さな輝きは、持つ人にだけ特別に見える。", "幕の端に隠れた点と薄い輪を置き、静かな特別感を表す。"),
    ("plus_15_repetition_behind_curtain.png", "幕裏の反復線", "何度も繰り返した練習が、光の外側にひとつの価値として残る。", "反復する短線を幕の奥に置き、最後の点を外側に出す。"),
    ("plus_16_one_of_one_stage_edge.png", "ステージ端の唯一点", "舞台端に置かれた一つの点が、自分だけの記録になる。", "ステージライン、幕の切れ目、単独の点で唯一性を表す。"),
    ("plus_17_hidden_frame_shadow_ring.png", "影輪の中の未公開フレーム", "隠れたフレームが、暗い輪の中で私的な記録になる。", "小さなフレームを幕に半分隠し、未公開感を作る。"),
    ("plus_18_growth_path_outside_light.png", "光外へ伸びる軌跡", "成長の道は、スポットライトの外側から始まっている。", "点列が幕の裏から伸び、光の円弧の外で止まる構成。"),
    ("plus_19_continuous_boundary_line.png", "境界をなぞる一本線", "サービスの価値は、見えない準備と表舞台の境界にある。", "幕の折り目から光の円弧へ変わる一本線で、概念を最小化する。"),
    ("plus_20_backstage_keepsake_stamp.png", "幕裏の記念印", "舞台裏の静かな一瞬が、小さな所有物のような記念印になる。", "スタンプ状の中に幕、光弧、点を収め、収集感を出す。"),
]
for file, title, story, intent in plus20:
    entries.append(
        {
            "group": "統合コンセプト20案",
            "file": f"icon_ideas_png/plus20/{file}",
            "title": title,
            "story": story,
            "intent": intent,
        }
    )

cheki_intents = {
    "cheki_abs_01_pin_frame.png": "太い白枠と画鋲の一点だけで、チェキとコルクボードの関係を記号化する。",
    "cheki_abs_02_tape_corner.png": "傾いた白枠とマステ角で、手作りで貼った不完全さを魅力にする。",
    "cheki_abs_03_cork_dots.png": "白枠の周囲にコルク粒を散らし、ボードに集める行為を抽象化する。",
    "cheki_abs_04_gloss_streak.png": "写真の内容を消し、白枠と一本の光沢線だけでチェキらしさを出す。",
    "cheki_abs_05_layered_frames.png": "重なる白枠で、複数の思い出が積み重なる推し活の時間を表す。",
    "cheki_abs_06_pin_shadow.png": "U字状の太い余白と押し留める点で、流れる時間を固定する感覚を作る。",
    "cheki_abs_07_handmade_cluster.png": "白枠、テープ、ピン、粒を小さくまとめ、手作り収集感を一つの印にする。",
    "cheki_abs_08_string_clip.png": "紐とクリップの線で、部屋に飾る私的なチェキ展示を簡略化する。",
    "cheki_abs_09_bottom_margin.png": "チェキの厚い下余白をL字の塊にし、写真らしさを最小単位で伝える。",
    "cheki_abs_10_board_marker.png": "四隅の粒と内側の白枠で、コルクボード上の小さな展示を表す。",
}
cheki_manifest = root / "icon_ideas_png" / "cheki_abstract10" / "_manifest_cheki_abstract10.csv"
if cheki_manifest.exists():
    with cheki_manifest.open(encoding="utf-8-sig", newline="") as f:
        for row in csv.DictReader(f):
            entries.append(
                {
                    "group": "チェキ抽象10案",
                    "file": f"icon_ideas_png/cheki_abstract10/{row['filename']}",
                    "title": row["title"],
                    "story": row["story"],
                    "intent": cheki_intents.get(
                        row["filename"],
                        "チェキの質感を写実ではなく記号へ置き換え、推し活の手作り感を表す。",
                    ),
                }
            )

type_intents = {
    "lapsell_type_01_backstage_gap.png": "文字間の余白を広めに取り、幕間や出番前の静けさをワードマークに変換する。",
    "lapsell_type_02_practice_trace.png": "主線の背後に薄い書き直しの気配を残し、練習の反復を文字で表す。",
    "lapsell_type_03_owned_moment.png": "文字の一部に小さな所有印を忍ばせ、Lapsell自体を私的な記録にする。",
    "lapsell_type_04_unreleased_label.png": "ラベルのような堅実な文字設計で、未公開の本物を預かる印象にする。",
    "lapsell_type_05_growth_path.png": "字形の流れに点や軌跡のニュアンスを持たせ、成長の道筋を表す。",
    "lapsell_type_06_daily_raw.png": "整えすぎない線質で、日常の素の記録が残るサービス感を出す。",
    "lapsell_type_07_hidden_effort.png": "完成した文字の外側に薄い補助線を想起させ、見えない努力を表す。",
    "lapsell_type_08_special_quiet.png": "小さな光沢や一点のアクセントだけで、静かな特別感をワードマークにする。",
    "lapsell_type_09_stage_edge.png": "ベースラインを舞台端として扱い、中心ではない場所の価値を文字で支える。",
    "lapsell_type_10_collectible_mark.png": "文字を所有物の印のようにまとめ、集めて持つブランド体験へ寄せる。",
}
type_manifest = root / "typography_lapsell10" / "_manifest_typography10.csv"
if type_manifest.exists():
    with type_manifest.open(encoding="utf-8-sig", newline="") as f:
        for row in csv.DictReader(f):
            entries.append(
                {
                    "group": "Lapsellタイポグラフィ10案",
                    "file": f"typography_lapsell10/{row['filename']}",
                    "title": row["title"],
                    "story": row["story"],
                    "intent": type_intents.get(row["filename"], "Lapsellの文字そのものにサービスの価値観を込める。"),
                }
            )

lines = [
    "# Lapsell ロゴカタログ",
    "",
    "このファイルは、現時点のロゴ案ごとに「タイトル」「ストーリー」「デザイン意図」を整理したもの。",
    "画像ファイルがまだ生成・透明化前の案も、指定済みのファイル名で管理する。",
    "",
]

current = None
for entry in entries:
    if entry["group"] != current:
        current = entry["group"]
        lines.extend([f"## {current}", ""])
    lines.extend(
        [
            f"### {entry['title']}",
            f"- ファイル: `{entry['file']}`",
            f"- ストーリー: {entry['story']}",
            f"- デザイン意図: {entry['intent']}",
            "",
        ]
    )

out.write_text("\n".join(lines), encoding="utf-8")
print(out)
print(f"entries={len(entries)}")
