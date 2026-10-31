import React, { useMemo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DraggableGridItem } from "./DraggableGridItem";
import { GRID_COLS, GRID_ROWS, CELL_SIZE } from "../../game/config";

export const GameGrid = ({
  gameGrid,
  onMerge,
  onCellPress,
  disabled = false,
  trashMode = false,
  handleCellClick,
  moveItemToSquare,
  selectedCell,
  responsiveDimensions,
  activeUiEffects = [],
}) => {
  const isDarknessMode = activeUiEffects.includes("darkness-mode");

  const gridData = useMemo(() => {
    const result = [];
    for (let row = 0; row < GRID_ROWS; row++) {
      const rowData = [];
      for (let col = 0; col < GRID_COLS; col++) {
        const index = row * GRID_COLS + col;
        rowData.push({ item: gameGrid[index], index });
      }
      result.push(rowData);
    }
    return result;
  }, [gameGrid]);

  const onMergeSafe = useCallback(
    (from, to) => {
      if (!disabled && onMerge) {
        onMerge(from, to);
      }
    },
    [disabled, onMerge]
  );

  const onCellPressSafe = useCallback(
    (idx) => {
      if (!disabled && onCellPress) {
        onCellPress(idx);
      }
    },
    [disabled, onCellPress]
  );

  const handleCellClickSafe = useCallback(
    (idx) => {
      if (!disabled && handleCellClick) {
        handleCellClick(idx);
      }
    },
    [disabled, handleCellClick]
  );

  const moveItemToSquareSafe = useCallback(
    (from, to) => {
      if (!disabled && moveItemToSquare) {
        moveItemToSquare(from, to);
      }
    },
    [disabled, moveItemToSquare]
  );

  return (
    <View style={styles.container}>
      <View style={styles.outerGlow}>
        <LinearGradient
          colors={[
            "rgba(99, 102, 241, 0.15)",
            "rgba(139, 92, 246, 0.1)",
            "rgba(15, 23, 42, 0.95)",
          ]}
          style={[
            styles.gridContainer,
            {
              borderRadius: responsiveDimensions?.gameBoardRadius || 24,
              padding: responsiveDimensions?.gameBoardInnerPadding || 12,
            },
          ]}
        >
          <View style={styles.gridInner}>
            {gridData.map((row, rowIndex) => (
              <View
                key={rowIndex}
                style={[styles.row, rowIndex < GRID_ROWS - 1 && styles.rowGap]}
              >
                  {row.map(({ item, index }, colIndex) => {
                    return (
                      <View
                        key={index}
                        style={[
                          styles.cellWrap,
                          colIndex < GRID_COLS - 1 && styles.colGap,
                        ]}
                      >
                        <DraggableGridItem
                          item={item}
                          index={index}
                          onDragEnd={onMergeSafe}
                          gameGrid={gameGrid}
                          onPressCell={onCellPressSafe}
                          disabled={disabled}
                          trashMode={trashMode}
                          handleCellClick={handleCellClickSafe}
                          moveItemToSquare={moveItemToSquareSafe}
                          selectedCell={selectedCell}
                          activeUiEffects={activeUiEffects}
                        />
                      </View>
                    );
                  })}
              </View>
            ))}
          </View>
          {isDarknessMode && (
            <View style={[StyleSheet.absoluteFill, styles.darknessOverlay]} pointerEvents="none" />
          )}
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: "center", 
    justifyContent: "center",
  },
  outerGlow: {
    borderRadius: 28,
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  gridContainer: {
    borderWidth: 1,
    borderColor: "rgba(99, 102, 241, 0.25)",
  },
  gridInner: {
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    borderRadius: 16,
    padding: 8,
  },
  row: { flexDirection: "row" },
  rowGap: { marginBottom: 6 },
  cellWrap: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    position: "relative",
  },
  colGap: { marginRight: 6 },
  darknessOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 10,
  },
});
